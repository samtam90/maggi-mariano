import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pietralunga",
  canonical: links.servizi["disidratazione-fanghi"]["pietralunga"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pietralunga",
  locationNames: { label: "Pietralunga", href: "pietralunga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
