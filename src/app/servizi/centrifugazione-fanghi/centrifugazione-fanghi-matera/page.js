import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Matera",
  canonical: links.servizi["centrifugazione-fanghi"]["matera"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Matera",
  locationNames: { label: "Matera", href: "matera" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["matera"],
      name: "Matera",
  }),
});
