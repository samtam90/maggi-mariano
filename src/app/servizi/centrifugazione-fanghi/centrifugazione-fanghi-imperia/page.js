import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Imperia",
  canonical: links.servizi["centrifugazione-fanghi"]["imperia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Imperia",
  locationNames: { label: "Imperia", href: "imperia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["imperia"],
      name: "Imperia",
  }),
});
