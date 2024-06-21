"use client";
import { useKey } from "@/lib/hooks/useKey";
import { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import Fuse from "fuse.js";
import { data as circlesData, placeString } from "@/lib/data/circles";
import Link from "next/link";
import Image from "next/image";
import { PlaceLabelBgColors } from "@/tailwind.config";

const convertKatakanaToHiragana = function (str: string) {
  return str.replace(/[\u30a1-\u30f6]/g, (match) =>
    String.fromCharCode(match.charCodeAt(0) - 0x60)
  );
};

export const MapsSearch: React.FC = function () {
  const searchBarRef = useRef<HTMLInputElement>(null);
  const switchSearchBarFocus = (state: boolean) => {
    setSearchBarFocus(state);
    if (state) {
      searchBarRef.current?.focus();
    } else {
      searchBarRef.current?.blur();
    }
  };
  const fuseOptions = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.3,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: ["id", "_name", "namePron"],
  };
  const fuse = new Fuse(
    circlesData.map((circle) => {
      return { _name: convertKatakanaToHiragana(circle.name), ...circle };
    }),
    fuseOptions
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const updateSearchResults = () => {
    const inputElement = searchBarRef.current;
    setSearchInput(
      convertKatakanaToHiragana(inputElement?.value.trim() || "").normalize(
        "NFKC"
      ) || ""
    );
  };
  const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false);
  const searchResults = fuse.search(searchInput).map((result) => result.item);
  const searchResultsRef = useRef<HTMLOListElement>(null);
  const [focusIndex, setFocusIndex] = useState<number>(0);
  useKey(
    ["ArrowDown"],
    (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).getAttribute("id") === "MapsSearchBar") {
        e.preventDefault();
        const searchResultsLength =
          searchResultsRef.current?.children.length || 1;
        setFocusIndex(
          (focusIndex + searchResultsLength + 1) % searchResultsLength
        );
      }
    },
    false
  );
  useKey(
    ["ArrowUp"],
    (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).getAttribute("id") === "MapsSearchBar") {
        e.preventDefault();
        const searchResultsLength =
          searchResultsRef.current?.children.length || 1;
        setFocusIndex(
          (focusIndex + searchResultsLength - 1) % searchResultsLength
        );
      }
    },
    false
  );
  useKey(
    ["Escape"],
    (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).getAttribute("id") === "MapsSearchBar") {
        e.preventDefault();
        switchSearchBarFocus(false);
      }
    },
    false
  );
  useKey(["/"], () => {
    switchSearchBarFocus(true);
  });
  useKey(["Ctrl", "k"], () => {
    switchSearchBarFocus(true);
  });
  useEffect(() => {
    searchBarRef.current?.addEventListener("focus", () => {
      switchSearchBarFocus(true);
    });
  }, []);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !(e.target as HTMLElement)?.closest("#MapsSearchBarContainer") &&
        !searchBarFocus
      ) {
        switchSearchBarFocus(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setFocusIndex(0);
  }, [searchInput]);
  const MAX_RESULTS = 10;
  return (
    <div className="relative mx-auto min-h-[4.75rem] w-full">
      <div
        id="MapsSearchBarContainer"
        data-value={searchInput}
        className="absolute z-50 h-auto w-full rounded-[1.875rem] bg-white shadow-md outline-2
      transition focus-within:shadow-xl data-[value='']:h-[3.75rem] lg:outline-transparent lg:focus-within:outline-body_text"
      >
        <div className="flex">
          <div className="m-4 flex h-8 w-8 items-center justify-center text-2xl">
            <MdSearch
              className="aspect-auto size-full"
              aria-label="マップを検索"
            />
          </div>
          <input
            id="MapsSearchBar"
            autoComplete="off"
            ref={searchBarRef}
            placeholder="検索"
            type="text"
            className="w-full bg-transparent px-0 py-4 text-xl font-semibold outline-none"
            onInput={updateSearchResults}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (searchResults.length) {
                  (
                    searchResultsRef.current?.children[focusIndex]
                      .firstElementChild as HTMLAnchorElement
                  )?.click();
                  switchSearchBarFocus(false);
                }
              }
            }}
          />
        </div>
        <div
          className="data-[hidden='true']:hidden"
          data-hidden={!searchInput || !searchBarFocus}
        >
          <ol ref={searchResultsRef} className="relative px-2 pb-4 lg:pb-0">
            {searchResults.length ? (
              searchResults.slice(0, MAX_RESULTS).map((circle, i) => {
                const {
                  id: circleId,
                  mapId,
                  name: circleName,
                  place,
                  noLogo,
                } = circle;
                return (
                  <li key={circleId}>
                    <Link
                      href={`/maps?id=${mapId}`}
                      className={`flex size-full p-2 text-left font-semibold focus-visible:bg-odd_column ${focusIndex === i ? "bg-odd_column" : ""}`}
                      onClick={() => {
                        setFocusIndex(i);
                        switchSearchBarFocus(false);
                      }}
                    >
                      <div className="ml-4 mr-2 flex items-center justify-center">
                        {noLogo ? (
                          <div className="h-[1.5em] w-[1.5em]"></div>
                        ) : (
                          <Image
                            src={`/img/circles/icon/${circleId}.webp`}
                            alt={circleName}
                            width={28}
                            height={28}
                            className="h-[1.5em] w-[1.5em]"
                          />
                        )}
                      </div>
                      <div className="ml-0 mr-auto text-lg">{circleName}</div>
                      <div
                        className={`ml-auto mr-0 flex items-center justify-center rounded-full px-2 text-base text-white
                  bg-${PlaceLabelBgColors[place] || "gray-400"}`}
                      >
                        {placeString[place]}
                      </div>
                    </Link>
                  </li>
                );
              })
            ) : (
              <li className="p-2 text-center font-bold">
                検索結果がありません
              </li>
            )}
          </ol>
          <div className="mt-2 hidden h-12 w-full border-t-2 border-body_text border-opacity-20 px-[15%] lg:flex lg:items-center lg:justify-between ">
            <div>
              <kbd className="kbd">/</kbd>
              <span>or</span>
              <kbd className="kbd">Ctrl</kbd>
              <span className="font-mono">+</span>
              <kbd className="kbd">K</kbd>
              <span className="ml-2">検索バーを開く</span>
            </div>
            <div>
              <kbd className="kbd">Esc</kbd>
              <span className="ml-2">閉じる</span>
            </div>
            <div>
              <kbd className="kbd">↑</kbd>
              <kbd className="kbd">↓</kbd>
              <span className="ml-2">選択</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
