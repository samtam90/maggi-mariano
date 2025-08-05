import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Livorno",
  canonical: links.servizi["centrifugazione-fanghi"]["livorno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Livorno",
  locationNames: { label: "Livorno", href: "livorno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["livorno"],
      name: "Livorno",
  }),
});
