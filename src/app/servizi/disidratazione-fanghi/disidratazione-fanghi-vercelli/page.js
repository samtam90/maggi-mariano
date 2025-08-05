import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Vercelli",
  canonical: links.servizi["disidratazione-fanghi"]["vercelli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Vercelli",
  locationNames: { label: "Vercelli", href: "vercelli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["vercelli"],
      name: "Vercelli",
  }),
});
