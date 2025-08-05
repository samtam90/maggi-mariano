import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Imperia",
  canonical: links.servizi["disidratazione-fanghi"]["imperia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Imperia",
  locationNames: { label: "Imperia", href: "imperia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["imperia"],
      name: "Imperia",
  }),
});
