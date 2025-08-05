import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Porano",
  canonical: links.servizi["disidratazione-fanghi"]["porano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Porano",
  locationNames: { label: "Porano", href: "porano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
