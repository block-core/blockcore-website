import { Component, Inject } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-create-chain',
  templateUrl: './create-chain.component.html',
  styleUrls: ['./create-chain.component.css']
})
export class CreateChainComponent {

  os = 'win';
  genesisWarning: string;
  genesisjson: string;
  advanced: boolean;

  config = {
    name: 'MyCoin',
    ticker: 'MYC',
    genesis: 'My Unique Blockchain',
    coinType: '3601',
    magic: '01-4D-59-43',
    pubkeyaddress: '50',
    scriptaddress: '110',
    secretaddress: '160',
    preminereward: '1000000',

    powreward: '10',
    posreward: '10',
    postimestampmask: '0000000F',
    posversion: '3',

    port: '15001',
    rpcport: '15002',
    apiport: '15003',

    portregtest: '25001',
    rpcportregtest: '25002',
    apiportregtest: '25003',

    porttest: '35001',
    rpcporttest: '35002',
    apiporttest: '35003',

    targetspacing: '64',
    lastpowblock: '25000',

    seeddns1: 'seed.mycoin.net',
    seeddns2: 'seed.mycoin.com',
    seednode1: '23.23.23.23',
    seednode2: '24.24.24.24',

    genesistimemain: '',
    genesisnoncemain: '',
    genesisbitsmain: '',
    genesisblockhashmain: '',
    genesismerklehashmain: '',

    genesistimeregtest: '',
    genesisnonceregtest: '',
    genesisbitsregtest: '',
    genesisblockhashregtest: '',
    genesismerklehashregtest: '',

    genesistimetest: '',
    genesisnoncetest: '',
    genesisbitstest: '',
    genesisblockhashtest: '',
    genesismerklehashtest: ''

  };

  get generator() {
    let prefix = '';

    if (this.os === 'win') {
      prefix = 'Blockcore.Generator.exe';
    } else {
      prefix = 'dotnet run Blockcore.Generator.dll';
    }

    return prefix + ' \"' + this.config.genesis + '\"';
  }

  get node() {
    let prefix = '';
    let newline = '\n';
    let newcmd = ' \\\n';

    if (this.os === 'win') {
      newline = '\r\n';
      newcmd = ' ^\r\n';
      prefix = 'chcp 65001' + newline;
    }

    let cmd = prefix;

    cmd += 'dotnet new blockcorecoin' + newcmd;
    cmd += '--output ' + this.config.name + newcmd;
    cmd += '--cointicker ' + this.config.ticker + newcmd;
    cmd += '--magic "' + this.config.magic + '"' + newcmd;
    cmd += '--cointype ' + this.config.coinType + newcmd;
    cmd += '--pubkeyaddress ' + this.config.pubkeyaddress + newcmd;
    cmd += '--scriptaddress ' + this.config.scriptaddress + newcmd;
    cmd += '--secretaddress ' + this.config.secretaddress + newcmd;
    cmd += '--pow-reward ' + this.config.powreward + newcmd;
    cmd += '--pos-reward ' + this.config.posreward + newcmd;
    cmd += '--pos-timestamp-mask "' + this.config.postimestampmask + '"' + newcmd;
    cmd += '--pos-version ' + this.config.posversion + newcmd;
    cmd += '--premine-reward ' + this.config.preminereward + newcmd;
    cmd += '--port ' + this.config.port + newcmd;
    cmd += '--rpcport ' + this.config.rpcport + newcmd;
    cmd += '--apiport ' + this.config.apiport + newcmd;
    cmd += '--port-regtest ' + this.config.portregtest + newcmd;
    cmd += '--rpcport-regtest ' + this.config.rpcportregtest + newcmd;
    cmd += '--apiport-regtest ' + this.config.apiportregtest + newcmd;
    cmd += '--port-test ' + this.config.porttest + newcmd;
    cmd += '--rpcport-test ' + this.config.rpcporttest + newcmd;
    cmd += '--apiport-test ' + this.config.apiporttest + newcmd;
    cmd += '--target-spacing ' + this.config.targetspacing + newcmd;
    cmd += '--lastpowblock ' + this.config.lastpowblock + newcmd;
    cmd += '--seeddns1 "' + this.config.seeddns1 + '"' + newcmd;
    cmd += '--seeddns2 "' + this.config.seeddns2 + '"' + newcmd;
    cmd += '--seednode1 "' + this.config.seednode1 + '"' + newcmd;
    cmd += '--seednode2 "' + this.config.seednode2 + '"' + newcmd;
    cmd += '--genesistext "' + this.config.genesis + '"' + newcmd;
    cmd += '--genesis-time-main ' + this.config.genesistimemain + newcmd;
    cmd += '--genesis-nonce-main ' + this.config.genesisnoncemain + newcmd;
    cmd += '--genesis-bits-main "' + this.config.genesisbitsmain + '"' + newcmd;
    cmd += '--genesis-block-hash-main "' + this.config.genesisblockhashmain + '"' + newcmd;
    cmd += '--genesis-merkle-hash-main "' + this.config.genesismerklehashmain + '"' + newcmd;
    cmd += '--genesis-time-regtest ' + this.config.genesistimeregtest + newcmd;
    cmd += '--genesis-nonce-regtest ' + this.config.genesisnonceregtest + newcmd;
    cmd += '--genesis-bits-regtest "' + this.config.genesisbitsregtest + '"' + newcmd;
    cmd += '--genesis-block-hash-regtest "' + this.config.genesisblockhashregtest + '"' + newcmd;
    cmd += '--genesis-merkle-hash-regtest "' + this.config.genesismerklehashregtest + '"' + newcmd;
    cmd += '--genesis-time-test ' + this.config.genesistimetest + newcmd;
    cmd += '--genesis-nonce-test ' + this.config.genesisnoncetest + newcmd;
    cmd += '--genesis-bits-test "' + this.config.genesisbitstest + '"' + newcmd;
    cmd += '--genesis-block-hash-test "' + this.config.genesisblockhashtest + '"' + newcmd;
    cmd += '--genesis-merkle-hash-test "' + this.config.genesismerklehashtest + '"' + newcmd;
    cmd += '--force' + newline;

    return cmd;
  }

  get filename() {
    let filename = 'generate.sh';

    if (this.os === 'win') {
      filename = 'generate.bat';
    }

    return filename;
  }

  parseJson() {
    let json = null;

    try {
      json = JSON.parse(this.genesisjson);
    } catch (error) {
      this.genesisWarning = error;
      return;
    }

    if (json.coinBaseText !== this.config.genesis) {
      this.genesisWarning = 'Error: The genesis text in generated output is different than input above. You must generate with the same parameter.';
      return;
    } else {
      this.genesisWarning = '';
    }

    const mainNetwork = json.networks[0];
    const regtestNetwork = json.networks[1];
    const testNetwork = json.networks[2];

    this.config.genesisbitsmain = mainNetwork.bits;
    this.config.genesisblockhashmain = mainNetwork.hash;
    this.config.genesismerklehashmain = mainNetwork.hashMerkleRoot;
    this.config.genesisnoncemain = mainNetwork.nonce;
    this.config.genesistimemain = mainNetwork.time;

    this.config.genesisbitsregtest = regtestNetwork.bits;
    this.config.genesisblockhashregtest = regtestNetwork.hash;
    this.config.genesismerklehashregtest = regtestNetwork.hashMerkleRoot;
    this.config.genesisnonceregtest = regtestNetwork.nonce;
    this.config.genesistimeregtest = regtestNetwork.time;

    this.config.genesisbitstest = testNetwork.bits;
    this.config.genesisblockhashtest = testNetwork.hash;
    this.config.genesismerklehashtest = testNetwork.hashMerkleRoot;
    this.config.genesisnoncetest = testNetwork.nonce;
    this.config.genesistimetest = testNetwork.time;
  }

  download() {
    const blob = new Blob([this.node], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, this.filename);
  }
}
