import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castelnuovo Berardenga",
  canonical: links.servizi["disidratazione-fanghi"]["castelnuovo-berardenga"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castelnuovo Berardenga",
  locationNames: { label: "Castelnuovo Berardenga", href: "castelnuovo-berardenga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
