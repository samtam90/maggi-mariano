import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Lecce",
  canonical: links.servizi["centrifugazione-fanghi"]["lecce"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Lecce",
  locationNames: { label: "Lecce", href: "lecce" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["lecce"],
      name: "Lecce",
  }),
});
