import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Salerno",
  canonical: links.servizi["disidratazione-fanghi"]["salerno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Salerno",
  locationNames: { label: "Salerno", href: "salerno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["salerno"],
      name: "Salerno",
  }),
});
