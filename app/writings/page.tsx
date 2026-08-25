"use client";

import { useState } from "react";
import ContentLayout from "@/components/ContentLayout";
import { data } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Rows visible before "Read more" per breakpoint (1 / 2 / 3 columns).
const INITIAL_ROWS = 2;
const VISIBLE = {
  mobile: INITIAL_ROWS * 1,
  sm: INITIAL_ROWS * 2,
  lg: INITIAL_ROWS * 3,
};

export default function WritingsPage() {
  const [expanded, setExpanded] = useState(false);

  if (!data?.writings?.articles) return null;

  const articles = data.writings.articles;
  const hasMore = articles.length > VISIBLE.mobile;

  return (
    <ContentLayout
      title={data.writings.title}
      subline1={data.writings.subline1}
      subline2={data.writings.subline2}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* @ts-ignore */}
        {articles?.map((article, index: number) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.1, ease: "easeOut" }}
            className={cn(
              !expanded && index >= VISIBLE.mobile && "hidden",
              !expanded &&
                index >= VISIBLE.mobile &&
                index < VISIBLE.sm &&
                "sm:block",
              !expanded &&
                index >= VISIBLE.sm &&
                index < VISIBLE.lg &&
                "lg:block"
            )}
          >

            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <Card className="h-full transition-all duration-300 relative overflow-hidden border-border hover:shadow-lg">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br bg-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <CardHeader className="relative">
                  {/* Meta info */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-border" />
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground leading-tight line-clamp-2 transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>

                <CardContent className="relative flex flex-col h-full justify-between gap-6">
                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Footer with tags and arrow */}
                  <div className="flex items-end justify-between mt-auto">
                    <div className="flex gap-2 flex-wrap">
                      {article.tags.map((tag: any) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="rounded-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-10 h-10 rounded-full ">
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {hasMore && !expanded && (
        <div
          className={cn(
            "flex justify-center pt-10",
            articles.length <= VISIBLE.sm && "sm:hidden",
            articles.length <= VISIBLE.lg && "lg:hidden"
          )}
        >
          <Button
            variant="outline"
            className="rounded-full gap-2"
            onClick={() => setExpanded(true)}
          >
            Read more
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      )}

      <div className="pb-20" />
    </ContentLayout>
  );
}
