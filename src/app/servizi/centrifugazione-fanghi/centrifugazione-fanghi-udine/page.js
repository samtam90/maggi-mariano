import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Udine",
  canonical: links.servizi["centrifugazione-fanghi"]["udine"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Udine",
  locationNames: { label: "Udine", href: "udine" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["udine"],
      name: "Udine",
  }),
});
