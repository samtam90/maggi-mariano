import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Rieti",
  canonical: links.servizi["centrifugazione-fanghi"]["rieti"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Rieti",
  locationNames: { label: "Rieti", href: "rieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["rieti"],
      name: "Rieti",
  }),
});
