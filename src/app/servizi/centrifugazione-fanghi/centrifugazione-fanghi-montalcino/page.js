import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montalcino",
  canonical: links.servizi["centrifugazione-fanghi"]["montalcino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montalcino",
  locationNames: { label: "Montalcino", href: "montalcino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
