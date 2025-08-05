import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bucine",
  canonical: links.servizi["centrifugazione-fanghi"]["bucine"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bucine",
  locationNames: { label: "Bucine", href: "bucine" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
