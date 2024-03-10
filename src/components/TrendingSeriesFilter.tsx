"use client";
import { handleTrendingSeriesFilter } from "@/actions";
import { Tab, Tabs } from "@nextui-org/react";

export default function TrendingSeriesFilter() {
  return (
    <Tabs
      radius="full"
      color="primary"
      size="lg"
      classNames={{
        tabList: "bg-default w-full md:w-auto",
        tabContent: "group-data-[selected=true]:text-black font-medium",
        base: "w-full md:w-auto",
      }}
      onSelectionChange={(key) => handleTrendingSeriesFilter(key as string)}
    >
      <Tab key="week" title="Esta semana" />
      <Tab key="day" title="Hoy" />
    </Tabs>
  );
}
