import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Buonconvento",
  canonical: links.servizi["disidratazione-fanghi"]["buonconvento"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Buonconvento",
  locationNames: { label: "Buonconvento", href: "buonconvento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
