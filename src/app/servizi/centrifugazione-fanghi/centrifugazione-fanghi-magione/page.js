import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Magione",
  canonical: links.servizi["centrifugazione-fanghi"]["magione"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Magione",
  locationNames: { label: "Magione", href: "magione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
