import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Poggiodomo",
  canonical: links.servizi["disidratazione-fanghi"]["poggiodomo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Poggiodomo",
  locationNames: { label: "Poggiodomo", href: "poggiodomo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
