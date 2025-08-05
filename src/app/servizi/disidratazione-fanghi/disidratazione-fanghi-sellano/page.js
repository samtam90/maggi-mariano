import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sellano",
  canonical: links.servizi["disidratazione-fanghi"]["sellano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sellano",
  locationNames: { label: "Sellano", href: "sellano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
