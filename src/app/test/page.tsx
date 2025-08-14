import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Braces, GalleryHorizontalEnd } from "lucide-react";

export default function TestPage() {
    return (
        <Tabs defaultValue="cards">
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
            <TabsContent className="text-white" value="cards">
                Cards tab content.
            </TabsContent>
            <TabsContent className="text-white" value="json">
                JSON tab content.
            </TabsContent>
        </Tabs>
    );
}
