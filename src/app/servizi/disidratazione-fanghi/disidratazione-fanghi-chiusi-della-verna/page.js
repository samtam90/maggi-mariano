import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Chiusi della Verna",
  canonical: links.servizi["disidratazione-fanghi"]["chiusi-della-verna"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Chiusi della Verna",
  locationNames: { label: "Chiusi della Verna", href: "chiusi-della-verna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
