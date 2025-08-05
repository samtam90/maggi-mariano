import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Ragusa",
  canonical: links.servizi["disidratazione-fanghi"]["ragusa"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Ragusa",
  locationNames: { label: "Ragusa", href: "ragusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["ragusa"],
      name: "Ragusa",
  }),
});
