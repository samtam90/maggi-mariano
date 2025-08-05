import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Parrano",
  canonical: links.servizi["disidratazione-fanghi"]["parrano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Parrano",
  locationNames: { label: "Parrano", href: "parrano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
