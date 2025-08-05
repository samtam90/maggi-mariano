import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Rimini",
  canonical: links.servizi["centrifugazione-fanghi"]["rimini"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Rimini",
  locationNames: { label: "Rimini", href: "rimini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["rimini"],
      name: "Rimini",
  }),
});
