import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Braces, GalleryHorizontalEnd } from "lucide-react";
import { SideBySideContainer } from "./side-by-side-container";
import { Button } from "@/components/button";
import { JsonTabContent } from "./json-tab-content";

const codeContent: string =
    '[\n\t{\n\t\t"question": "The question would go here",\n\t\t"answer": "The answer would then go here"\n\t},\n\t{\n\t\t"question": "Yet another question, #2 here",\n\t\t"answer": "Then the second answer here"\n\t},\n\t{\n\t\t"question": "Third question here. Only doing these questions to get to double digit line numbers",\n\t\t"answer": "Third answer, nice"\n\t}\n]';

export function EditCardsPage() {
    return (
        <div className="pt-8 pb-6 pl-6 pr-8 w-full h-full ">
            <Tabs defaultValue="cards" className="flex flex-col w-full h-full">
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
                <TabsContent className="" value="cards">
                    <div className="mt-16">
                        <SideBySideContainer headingText="1" />
                    </div>
                </TabsContent>
                <TabsContent className="pt-8" value="json">
                    <JsonTabContent json={codeContent} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
