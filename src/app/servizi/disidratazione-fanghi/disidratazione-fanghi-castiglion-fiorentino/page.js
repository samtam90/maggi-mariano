import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castiglion Fiorentino",
  canonical: links.servizi["disidratazione-fanghi"]["castiglion-fiorentino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castiglion Fiorentino",
  locationNames: { label: "Castiglion Fiorentino", href: "castiglion-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
