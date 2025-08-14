import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Braces, GalleryHorizontalEnd } from "lucide-react";
import { SideBySideContainer } from "./side-by-side-container";
import { Button } from "@/components/button";

export function EditCardsPage() {
    return (
        <div className="py-8 pl-6 pr-8 w-full">
            <Tabs defaultValue="cards" className="flex flex-col gap-16 w-full">
                <div className="w-full flex items-center justify-between">
                    <TabsList>
                        <TabsTrigger value="cards">
                            <GalleryHorizontalEnd />
                            Cards
                        </TabsTrigger>
                        <TabsTrigger value="json">
                            <Braces />
                            JSON
                        </TabsTrigger>
                    </TabsList>
                    <Button>
                        <GalleryHorizontalEnd />
                        Add to a deck
                    </Button>
                </div>
                <TabsContent className="text-white" value="cards">
                    <SideBySideContainer headingText="1" />
                </TabsContent>
                <TabsContent className="text-white" value="json">
                    JSON tab content.
                </TabsContent>
            </Tabs>
        </div>
    );
}
