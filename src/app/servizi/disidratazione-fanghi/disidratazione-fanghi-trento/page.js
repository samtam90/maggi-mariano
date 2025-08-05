import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Trento",
  canonical: links.servizi["disidratazione-fanghi"]["trento"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Trento",
  locationNames: { label: "Trento", href: "trento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["trento"],
      name: "Trento",
  }),
});
