import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Magione",
  canonical: links.servizi["disidratazione-fanghi"]["magione"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Magione",
  locationNames: { label: "Magione", href: "magione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
