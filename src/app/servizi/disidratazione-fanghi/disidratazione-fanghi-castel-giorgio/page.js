import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castel Giorgio",
  canonical: links.servizi["disidratazione-fanghi"]["castel-giorgio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castel Giorgio",
  locationNames: { label: "Castel Giorgio", href: "castel-giorgio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
