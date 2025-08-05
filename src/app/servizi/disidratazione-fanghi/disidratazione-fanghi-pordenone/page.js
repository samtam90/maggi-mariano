import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pordenone",
  canonical: links.servizi["disidratazione-fanghi"]["pordenone"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pordenone",
  locationNames: { label: "Pordenone", href: "pordenone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["pordenone"],
      name: "Pordenone",
  }),
});
