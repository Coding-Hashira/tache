"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { colors } from "@/constants";
import { useState } from "react";
import { useAddTagsModal } from "@/store/use-add-tags-modal";
import { useTagStore } from "@/store/use-tags";
import { useCallback } from "react";
import { toast } from "sonner";

export function AddTagsModal() {
  const [name, setName] = useState("");
  const [color, setColor] = useState(17);
  const { isOpen, close, setLoading } = useAddTagsModal();
  const { addTag } = useTagStore();

  const handleAddTag = useCallback(() => {
    setLoading(true);
    const tagData = {
      name: name,
      color: colors[color].color,
    };

    // Close the modal immediately
    close();

    // Reset the form
    setName("");
    setColor(17);

    // Perform the API call in the background
    fetch("/api/tags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tagData),
    })
      .then(async (response) => {
        if (response.ok) {
          const tag = await response.json();
          addTag(tag);

          // TODO: Add tag to store if needed
          toast.success("Tag added successfully!");
        } else {
          throw new Error("Failed to add tag");
        }
      })
      .catch((error) => {
        console.error("Error adding tag:", error);
        toast.error("Error adding tag!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name, color, close, setLoading]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="border-b pb-2 border-b-foreground/10">
          <DialogTitle>Add tag</DialogTitle>
        </DialogHeader>

        <div className=" space-y-2">
          <Label htmlFor="name" className="font-inter font-semibold">
            Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full space-y-2">
          <Label htmlFor="color" className="font-inter font-semibold">
            Color
          </Label>
          <Select
            defaultValue={colors[color]?.color ?? "#808080"}
            onValueChange={(value) => {
              setColor(colors.findIndex((color) => color.color === value));
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup id="color">
                {colors.map((color) => (
                  <SelectItem key={color.id} defaultChecked value={color.color}>
                    <div className="flex items-center justify-center gap-3.5">
                      <div
                        className="rounded-full h-3 w-3 "
                        style={{ background: color.color }}
                      />
                      {color.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter className="mt-4">
          <Button
            onClick={close}
            className="text-sm rounded-md cursor-pointer font-medium"
            variant="ghost"
          >
            Cancel
          </Button>
          <Button
            className="text-sm rounded-md cursor-pointer font-medium"
            onClick={handleAddTag}
            disabled={!name.trim()}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
