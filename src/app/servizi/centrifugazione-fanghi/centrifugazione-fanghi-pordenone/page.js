import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pordenone",
  canonical: links.servizi["centrifugazione-fanghi"]["pordenone"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pordenone",
  locationNames: { label: "Pordenone", href: "pordenone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["pordenone"],
      name: "Pordenone",
  }),
});
