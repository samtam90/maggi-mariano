import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Agrigento",
  canonical: links.servizi["centrifugazione-fanghi"]["agrigento"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Agrigento",
  locationNames: { label: "Agrigento", href: "agrigento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["agrigento"],
      name: "Agrigento",
  }),
});
