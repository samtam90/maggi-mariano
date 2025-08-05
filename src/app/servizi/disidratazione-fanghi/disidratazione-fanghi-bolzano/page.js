import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bolzano",
  canonical: links.servizi["disidratazione-fanghi"]["bolzano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bolzano",
  locationNames: { label: "Bolzano", href: "bolzano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["bolzano"],
      name: "Bolzano",
  }),
});
