import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montalcino",
  canonical: links.servizi["disidratazione-fanghi"]["montalcino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montalcino",
  locationNames: { label: "Montalcino", href: "montalcino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
