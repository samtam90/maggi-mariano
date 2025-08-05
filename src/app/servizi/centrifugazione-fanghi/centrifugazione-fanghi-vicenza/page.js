import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Vicenza",
  canonical: links.servizi["centrifugazione-fanghi"]["vicenza"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Vicenza",
  locationNames: { label: "Vicenza", href: "vicenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["vicenza"],
      name: "Vicenza",
  }),
});
