import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Vercelli",
  canonical: links.servizi["centrifugazione-fanghi"]["vercelli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Vercelli",
  locationNames: { label: "Vercelli", href: "vercelli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["vercelli"],
      name: "Vercelli",
  }),
});
