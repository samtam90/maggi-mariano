import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Trieste",
  canonical: links.servizi["disidratazione-fanghi"]["trieste"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Trieste",
  locationNames: { label: "Trieste", href: "trieste" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["trieste"],
      name: "Trieste",
  }),
});
