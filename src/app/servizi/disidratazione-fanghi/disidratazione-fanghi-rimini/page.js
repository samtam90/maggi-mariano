import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Rimini",
  canonical: links.servizi["disidratazione-fanghi"]["rimini"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Rimini",
  locationNames: { label: "Rimini", href: "rimini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["rimini"],
      name: "Rimini",
  }),
});
