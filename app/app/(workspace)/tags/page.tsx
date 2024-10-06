"use client";

import { useAddTagsModal } from "@/store/use-add-tags-modal";
import { useTagStore } from "@/store/use-tags";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { GoTag } from "react-icons/go";

const TagsPage = () => {
  const { tags, setTags } = useTagStore();
  const [tagsVisible, setTagsVisible] = useState(true);
  const { open } = useAddTagsModal();

  useEffect(() => {
    fetch("/api/tags")
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, [setTags]);

  return (
    <div className="flex flex-col gap-4 pt-10 max-w-[800px] w-4/5">
      <h1 className="text-2xl font-bold px-4">Tags & Filters</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col overflow-hidden gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Button
                onClick={() => setTagsVisible(!tagsVisible)}
                size="icon"
                variant="ghost"
                className="rounded-md"
              >
                <ChevronDown
                  className="w-4 h-4 text-foreground/70 transition-transform duration-300"
                  style={{
                    transform: tagsVisible ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                />
              </Button>
              <h2 className="text-md font-bold">Tags</h2>
            </div>
            <Button
              className="rounded-md"
              size="icon"
              variant="ghost"
              onClick={open}
            >
              <Plus className="w-[18px] text-foreground/70 h-[18px]" />
            </Button>
          </div>
          <div className=" ml-[27px] space-y-2 w-full">
            <div className="h-px w-full bg-foreground/10" />
            {tagsVisible && tags && tags?.length > 0 && (
              <div className="flex flex-col gap-2">
                {tags.map((tag) => (
                  <>
                    <div
                      key={tag.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <GoTag
                          className="w-[18px] h-[18px] rotate-90"
                          style={{ color: tag.color }}
                        />
                        <span className="text-sm font-inter font-light">
                          {tag.name}
                        </span>
                      </div>
                    </div>
                    <div className="h-px w-full bg-foreground/10" />
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
