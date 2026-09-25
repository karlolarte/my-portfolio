import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCardType = {
  src: string;
  title: string;
  description: string;
  stack: string;
};

const ProjectCard = ({ src, title, description, stack }: ProjectCardType) => {
  return (
    <Card className="mx-5 flex flex-row gap-0 overflow-hidden p-0 transition-all duration-200 hover:scale-105 md:mx-0 md:basis-1/3 md:flex-col md:py-6">
      <div className="relative flex h-30 w-1/4 md:w-full">
        <Image src={src} alt="Project preview" fill className="object-contain" />
      </div>
      <div className="itemc flex flex-1 flex-col justify-center gap-2">
        <CardHeader>
          <CardTitle className="text-sm md:text-xl">{title}</CardTitle>
          <CardDescription className="md:text-md text-md">{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground text-xs italic md:text-sm">{stack}</p>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
