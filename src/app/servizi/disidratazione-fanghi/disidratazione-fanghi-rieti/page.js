import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Rieti",
  canonical: links.servizi["disidratazione-fanghi"]["rieti"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Rieti",
  locationNames: { label: "Rieti", href: "rieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["rieti"],
      name: "Rieti",
  }),
});
