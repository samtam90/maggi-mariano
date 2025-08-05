import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cascia",
  canonical: links.servizi["disidratazione-fanghi"]["cascia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cascia",
  locationNames: { label: "Cascia", href: "cascia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
