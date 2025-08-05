import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Benevento",
  canonical: links.servizi["disidratazione-fanghi"]["benevento"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Benevento",
  locationNames: { label: "Benevento", href: "benevento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["benevento"],
      name: "Benevento",
  }),
});
