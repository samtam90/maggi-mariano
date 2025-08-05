import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pescara",
  canonical: links.servizi["disidratazione-fanghi"]["pescara"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pescara",
  locationNames: { label: "Pescara", href: "pescara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["pescara"],
      name: "Pescara",
  }),
});
