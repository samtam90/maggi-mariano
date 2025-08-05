import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Trevi",
  canonical: links.servizi["disidratazione-fanghi"]["trevi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Trevi",
  locationNames: { label: "Trevi", href: "trevi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
