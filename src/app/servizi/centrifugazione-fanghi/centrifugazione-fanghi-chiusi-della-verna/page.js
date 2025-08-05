import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Chiusi della Verna",
  canonical: links.servizi["centrifugazione-fanghi"]["chiusi-della-verna"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Chiusi della Verna",
  locationNames: { label: "Chiusi della Verna", href: "chiusi-della-verna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
