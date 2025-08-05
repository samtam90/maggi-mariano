import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Oristano",
  canonical: links.servizi["disidratazione-fanghi"]["oristano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Oristano",
  locationNames: { label: "Oristano", href: "oristano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["oristano"],
      name: "Oristano",
  }),
});
