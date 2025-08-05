import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Savona",
  canonical: links.servizi["centrifugazione-fanghi"]["savona"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Savona",
  locationNames: { label: "Savona", href: "savona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["savona"],
      name: "Savona",
  }),
});
